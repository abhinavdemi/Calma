// Supabase client — scaffolded for Phase 2, not actively used in Phase 1
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Client will be initialized but unused until Phase 2 authentication
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
