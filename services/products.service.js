import { supabase } from "../supabase.js";
export async function getAllProducts(){
    const {data, error} = await supabase.from('products')
    .select()
    .limit(10);
    if(error) throw new Error(error.message);
    return data;
};

