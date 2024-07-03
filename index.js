const axios = require("axios");

exports.formatMerchantPhone = (phone) => {
  phone = phone.toString();

  if (phone.substring(0, 4) === "+252") return phone.slice(1, 13);

  const countryCodeIncluded =
    phone.substring(0, 4) != "+252" && phone.substring(0, 3) != "252";

  if (countryCodeIncluded) return "252" + phone;

  return phone;
};

exports.payByWaafiPay = async ({
    phone,
    amount,
    merchantUid,
    apiUserId,
    apiKey,
    description,
    invoiceId,
    referenceId,
    currency = "USD",
  }) => {
    try {
      if (!phone) throw new Error("[MERCHANT-ERROR]::: Phone number is required");

      let sender = this.formatMerchantPhone(phone);

      const body = {
        schemaVersion: "1.0",
        requestId: "10111331033",
        timestamp: 1590587436057686,
        channelName: "WEB",
        serviceName: "API_PURCHASE",
        serviceParams: {
          merchantUid,
          apiUserId,
          apiKey,
          paymentMethod: "mwallet_account",
          payerInfo: {
            accountNo: sender,
          },
          transactionInfo: {
            referenceId: referenceId || "00",
            invoiceId: invoiceId || "000",
            amount: amount,
            currency: currency,
            description: description || "Test",
          },
        },
      };

      const { data } = await axios.post(process.env.MERCHANT_URL, body);

      if (data.responseMsg !== "RCS_SUCCESS") {
        let errorMessage = "";

        if (data.responseMsg == "RCS_NO_ROUTE_FOUND")
          errorMessage = "Phone Number Not Found";
        else if (data.responseMsg == "RCS_USER_REJECTED")
          errorMessage = "Customer rejected to authorize payment";
        else if (data.responseMsg == "Invalid_PIN")
          errorMessage = "Customer rejected to authorize payment";

        return {
          status: false,
          error: errorMessage !== "" ? errorMessage : data.responseMsg,
        };
      }

      return { status: true, message: "paid" };
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };
