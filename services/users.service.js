import { supabase } from "../supabase.js";

export async function login(username, password) {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("username", username)
    .eq('password', password);
  if(error) throw new Error(error.message);
  if(!data.length) throw new Error('Unauthorized');
}
