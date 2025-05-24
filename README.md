// README.md - Documentation for Mr.Chai Tea Point by Shammer Website
// ---------------------------------------------------------------
// This file explains the features, structure, customization, and support for the digital menu and cart system.
// Each section is commented for clarity and future maintainers.

# Mr.Chai Tea Point by Shammer - Website Documentation

## Overview
This website is a digital menu and cart system for Mr.Chai Tea Point by Shammer. It allows customers to browse the menu (Tea, Milkshakes, Snacks), add items to a cart, and show their order to the waiter. The site is responsive, user-friendly, and includes safety and contact information.

---

## Features
- **Responsive Design:** Works on all screen sizes (desktop, tablet, mobile).
- **Collapsible Menu:** Menu categories (Tea, Milkshakes, Snacks) expand/collapse for a clean look.
- **Add/Remove Items:** Users can increase or decrease the quantity of each item directly from the menu and cart.
- **Cart System:** Cart icon in the header shows the number of items. Clicking it displays the cart page.
- **Image Modal:** Clicking a menu item image opens a larger preview.
- **Contact & Feedback:** Footer includes contact details and a legal QR code payment note.
- **Security Note:** Users are warned to scan only the official QR code for payment.

---

## File Structure
```
app.js         # Menu logic, cart, and interactivity
index.html     # Main HTML structure
README.md      # Documentation (this file)
style.css      # All site styling and responsive design
logo.webp      # (Optional) Logo image for the site
```

---

## Main Components

### Header
- **Title & Subtitle:** Centered, with optional logo.
- **Cart Icon:** Top right, shows item count and opens the cart.

### Menu Section
- **Collapsible Categories:** Tea, Milkshakes, Snacks.
- **Menu Items:** Each shows image, name, price, description, and quantity controls (+/-).
- **Image Modal:** Click image for a larger view.

### Cart Section
- **Order List:** Shows all items added, with quantities and controls to increase/decrease from the cart.
- **Clear Cart:** Removes all items.
- **Back to Menu:** Returns to menu view.

### Footer
- **Instructions:** Remind user to show cart to waiter.
- **Contact & Feedback:** Name, phone, email, and feedback note.
- **QR Code Note:** Legal warning about scanning only the official QR code for payment.

---

## Customization & Maintenance
- **Menu Items:** Edit `menu` array in `app.js` to add, remove, or change menu items.
- **Images:** Update image URLs in `menu` array or add your own images.
- **Contact Info:** Edit the footer section in `index.html` for phone, email, or name changes.
- **Styling:** All styles are in `style.css` and are commented for easy navigation.
- **Logo:** Uncomment and update the logo image in the header if needed.

---

## Security & Compliance
- **QR Code Warning:** Footer note ensures users are aware of payment safety and Indian law compliance (RBI/UPI).
- **No Payment Processing:** The site does not process payments, only displays a menu and cart.

---

## Screenshots
> _Add screenshots here for future reference._

---

## Feedback & Support
- For any issues, suggestions, or feedback, contact:
  - **Phone:** +91 99999 99999
  - **Email:** feedback@shamteapoint.in

---

## License
This project is for Mr.Chai Tea Point by Shammer. For reuse or commercial deployment, contact the owner.
