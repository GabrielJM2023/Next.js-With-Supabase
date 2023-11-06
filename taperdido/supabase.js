import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izuwtwjojmuvomlduwsi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dXd0d2pvam11dm9tbGR1d3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI1NTEsImV4cCI6MjAxNDQ2ODU1MX0.HJSrxTZLKvBsgxxVTK2vDdEKdOw3_PNp61f9xI_-7pE";

export const supabase = createClient(supabaseUrl, supabaseKey);