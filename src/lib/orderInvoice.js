export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <img src="https://i.ibb.co.com/ynq5sbpL/image.png" width="120" />
              <h2 style="margin:10px 0;">🧾 Order Invoice</h2>
              <p style="color:#555;">Order ID: <strong>${orderId}</strong></p>
            </td>
          </tr>

          <!-- Items -->
          <tr>
            <td>
              <table width="100%" border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
                <thead>
                  <tr style="background:#f0f0f0;">
                    <th align="left">Product</th>
                    <th align="center">Qty</th>
                    <th align="right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${items
                    .map(
                      (item) => `
                    <tr>
                      <td>${item.title}</td>
                      <td align="center">${item.quantity}</td>
                      <td align="right">৳${item.price}</td>
                    </tr>
                  `,
                    )
                    .join("")}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Total -->
          <tr>
            <td align="right" style="padding-top:15px;">
              <h3>Total: ৳${totalPrice}</h3>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:20px; color:#777;">
              <p>Thank you for shopping with <strong>Hero Kidz</strong> ❤️</p>
              <p style="font-size:12px;">This is an automated email. Please do not reply.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};
