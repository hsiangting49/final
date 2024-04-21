import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wqtvclmwjxsvcwhacqoo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdHZjbG13anhzdmN3aGFjcW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDU1MzcsImV4cCI6MjAyNjIyMTUzN30.Je5o6-W7MaOTYUezxqBIZEZdJlA-Kx-s9WZfSi2Ec0k'

export const supabase = createClient(supabaseUrl, supabaseKey)