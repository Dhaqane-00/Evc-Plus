
![Logo](https://afrotech.so/wp-content/uploads/2019/04/EVC-PLUS-Logo-01-230x128.png)


##
Evc-Plus is an npm package that provides functions for formatting phone numbers and processing payments using WaafiPay.


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Installation

Install Evc-plus with npm

```bash
npm install evc-plus
```
    
## Features

- **Format Merchant Phone Numbers**: Easily format phone numbers to a standardized format suitable for merchant transactions.
- **Process Payments with WaafiPay**: Seamlessly integrate with WaafiPay to handle payments, including specifying details such as phone number, amount, merchant UID, and more.
- **Promise-based API**: Leverage the power of promises for handling asynchronous payment processing, with clear success and error handling.


## Usage/Examples

### Formatting a Phone Number

```javascript
const { formatMerchantPhone } = require('evc-plus');

// Format a phone number
const formattedNumber = formatMerchantPhone('+252 61*******');
console.log(formattedNumber); // Output: '61******'

```
### Processing a Payment

```javascript
const { payByWaafiPay } = require('evc-plus');

// Process a payment
payByWaafiPay({
  phone: formattedNumber,
  amount: 100,
  merchantUid: 'M******', //Ask User Provider Like Hormuud
  apiUserId: "1******",  //Ask User Provider Like Hormuud
  apiKey: 'API-*******', //Ask User Provider Like Hormuud
  description: 'Payment description',
  invoiceId: '12345',
  referenceId: 'abc123',
}).then(response => {
  console.log(response); // Output: Response object
}).catch(error => {
  console.error(error); // Output: Error object
});
```
### Using RestFull Api

```javascript
const jwt = require('jsonwebtoken');
const { payByWaafiPay } = require('evc-plus');

module.exports = {
  createOrder: async (req, res) => {
    try {
      const {
        user,
        payment,
        products,
        total,
        note,
        phone,
      } = req.body;

      console.log(phone);

      if (payment === "CASH") {
        const order = await Order({
          user: user,
          payment: Payment,
          products: products,
          total: total,
          note: note,
          phone: phone,
        }).save();

        res.status(201).json(order);
      } else {
        const waafiResponse = await payByWaafiPay({
          phone: phone,
          amount: total,
          merchantUid: process.env.merchantUid, //Enter User Api Key
          apiUserId: process.env.apiUserId,
          apiKey: process.env.apiKey,
        });

        if (waafiResponse.status) {
          const order = await Order({
            user: user,
            payment,
            products: products,
            total: total,
            note: note,
            phone: phone,
          }).save();

          res.status(201).json(order);
        } else {
          // Handling payment failure
          return res.status(400).send({
            status: "failed",
            message: `${waafiResponse.error}` ?? "Payment Failed Try Again",
          });
        }
      }
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

```
## Configuration

Ensure you have the correct API credentials set up before using `payByWaafiPay`.
## Contact

For support, please contact [Abdilaahi Dhaqane] at [abdilaahimowliid@gmail.com].


### Explanation:

- **Features**: Highlights the key functionalities of the package.
- **Installation**: Provides a simple command for installation via npm.
- **Usage**: Includes examples of how to format phone numbers and process payments.
- **Configuration**: Notes on necessary API credentials.
- **Contact**: How to reach out for support.