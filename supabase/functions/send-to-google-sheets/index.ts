
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

const GOOGLE_SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, condition, message } = await req.json()
    
    // Get environment variables
    const spreadsheetId = Deno.env.get('GOOGLE_SHEETS_SPREADSHEET_ID')
    const apiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY')
    
    if (!spreadsheetId || !apiKey) {
      throw new Error('Missing Google Sheets configuration')
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString()
    const values = [[timestamp, name, email, phone, condition, message]]
    
    // Send data to Google Sheets
    const response = await fetch(
      `${GOOGLE_SHEETS_API_URL}/${spreadsheetId}/values/Sheet1!A:F:append?valueInputOption=RAW&key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values
        })
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Google Sheets API error:', errorData)
      throw new Error(`Google Sheets API error: ${response.status}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Data sent to Google Sheets successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
