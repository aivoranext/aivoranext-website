export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      serviceInterest,
      callVolume,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !serviceInterest || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send to n8n webhook
    const webhookResponse = await fetch(
      "https://aivoranext.app.n8n.cloud/webhook/4e1b28e7-a70f-4df5-a18d-71959917b435",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          work_email: email,
          phone: phone || "",
          company_name: company || "",
          service_name: serviceInterest,
          call_volume: callVolume || "",
          project_details: message,
        }),
      }
    );

    if (!webhookResponse.ok) {
      throw new Error("Failed to submit form");
    }

    return Response.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to submit form. Please try again later." },
      { status: 500 }
    );
  }
}
