# Evc-Plus

![Logo](https://afrotech.so/wp-content/uploads/2019/04/EVC-PLUS-Logo-01-230x128.png)

Evc-Plus is a robust Node.js package that simplifies mobile payment processing through WaafiPay and provides utilities for Somali phone number formatting. Perfect for e-commerce applications and payment integrations in Somalia.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm version](https://badge.fury.io/js/evc-plus.svg)](https://www.npmjs.com/package/evc-plus)

## Features

- 📱 **Smart Phone Number Formatting**: Automatically handles Somali phone number formats
- 💳 **WaafiPay Integration**: Seamless payment processing with WaafiPay
- ⚡ **Promise-based API**: Modern async/await support
- 🔒 **Secure**: Built with security best practices
- 🛠️ **Easy Configuration**: Simple setup with your WaafiPay credentials

## Installation

Install via npm:

```bash
npm install evc-plus
```

## Usage

### Phone Number Formatting
Use the `formatMerchantPhone` function to format Somali phone numbers to the standard format.

### Processing Payments
Use the `payByWaafiPay` function to process payments through WaafiPay.

### Environment Variables

Create a `.env` file in your project root with:
- MERCHANT_UID
- API_USER_ID
- API_KEY

## API Reference

### formatMerchantPhone(phone: string)
Formats Somali phone numbers to the standard format.

**Parameters:**
- `phone` (string): Phone number in any format

**Returns:**
- Formatted phone number string

### payByWaafiPay(options: PaymentOptions)
Processes a payment through WaafiPay.

**Parameters:**
- `options` (object):
  - `phone` (string): Customer's phone number
  - `amount` (number): Payment amount
  - `merchantUid` (string): Your merchant UID
  - `apiUserId` (string): Your API user ID
  - `apiKey` (string): Your API key
  - `description?` (string): Payment description
  - `invoiceId?` (string): Invoice ID
  - `referenceId?` (string): Reference ID
  - `currency?` (string): Currency code (default: "USD")

**Returns:**
- Promise resolving to `{ status: boolean, message?: string, error?: string }`

## Error Handling

The package includes comprehensive error handling:
- Invalid phone numbers
- API authentication errors
- Payment rejection scenarios
- Network issues

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Support

For support or inquiries:
- 📧 Email: abdilaahimowliid@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/Dhaqane-00/Evc-Plus/issues)

## Author

**Abdilaahi Dhaqane**
- GitHub: [@Dhaqane-00](https://github.com/Dhaqane-00)