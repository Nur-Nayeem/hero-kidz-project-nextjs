export const adminOrderNotificationTemplate = ({
  orderId,
  name,
  email,
  contact,
  address,
  instruction,
  items,
  totalPrice,
}) => {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px; font-family:Arial;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:20px; border-radius:8px;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h2 style="margin:0;">📦 New Order Received</h2>
              <p style="color:#555;">Order ID: <strong>${orderId}</strong></p>
            </td>
          </tr>

          <!-- Customer Info -->
          <tr>
            <td style="padding-bottom:15px;">
              <h3 style="margin-bottom:8px;">👤 Customer Information</h3>
              <table width="100%" cellpadding="6" cellspacing="0" style="border:1px solid #ddd; border-collapse:collapse;">
                <tr>
                  <td width="30%" style="font-weight:bold;">Name</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Email</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Contact</td>
                  <td>${contact}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Address</td>
                  <td>${address}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Instruction</td>
                  <td>${instruction || "N/A"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Order Items -->
          <tr>
            <td>
              <h3 style="margin-bottom:8px;">🛒 Order Items</h3>
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
              <h3>Total Amount: ৳${totalPrice}</h3>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:20px; color:#777;">
              <p style="font-size:12px;">
                This email was automatically generated from <strong>Hero Kidz</strong> system.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};
