import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // https://qmeihdimhlccsnvhqlwc.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  // console.log(imagePath);
  // CREATE/EDIT CABIN
  let query = supabase.from("cabins");
  // console.log(id);
  // A. CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B. EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  // .select()

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(
      `${id ? "Cabins could not be edited" : "Cabins could not be created"}`
    );
  }

  // UPLOAD IMAGE
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);
  if (storageError) {
    // deleteCabin();
    await supabase.from("cabins").delete().eq("id", data.at(0).id);
    console.error(storageError);

    throw new Error(
      "Cabin image could not be uploaded and cabin was  not created"
    );
  }

  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
}
