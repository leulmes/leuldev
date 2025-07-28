import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  const serviceId = process.env.EMAIL_JS_SERVICE_ID
  const templateId = process.env.EMAIL_JS_TEMPLATE_ID
  const publicKeyId = process.env.EMAIL_JS_PUBLIC_KEY
  const privateKey = process.env.EMAIL_JS_PRIVATE_KEY

  console.log('data: ', data)
  const emailJSBody = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKeyId,
    accessToken: privateKey,
    template_params: data,
  }
  console.log('body: ', emailJSBody)

  try {
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(emailJSBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('resp: ', resp)
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 })
  }
  console.log('data: ', data)
  return NextResponse.json({ status: 200 })
}
