import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qmeihdimhlccsnvhqlwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtZWloZGltaGxjY3NudmhxbHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0NDIzMDAsImV4cCI6MjAzNzAxODMwMH0.5qxFcXp0oSSpFgCcL3_SVlvR9PTMa9NxZwcW2qerYKI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
