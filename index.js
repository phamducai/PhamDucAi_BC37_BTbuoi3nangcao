// homework TÍNH THUẾ THU NHẬP CÁ NHÂN
var fullName = "phamducai";
var inComeYear = 64;
var dependentPersons = 0;
function tax(fullName, inComeYear, dependentPersons) {
  taxIncome = inComeYear - 4 - dependentPersons * 1.6;
  if (taxIncome <= 60) {
    taxPerson = taxIncome * 0.05;
  } else if (taxIncome <= 120) {
    taxPerson = taxIncome * 0.1;
  } else if (taxIncome <= 210) {
    taxPerson = taxIncome * 0.15;
  } else if (taxIncome <= 384) {
    taxPerson = taxIncome * 0.2;
  } else if (taxIncome <= 624) {
    taxPerson = taxIncome * 0.25;
  } else if (taxIncome <= 960) {
    taxPerson = taxIncome * 0.3;
  } else {
    taxPerson = taxIncome * 0.35;
  }
  result = console.log(
    `${fullName} có thuế thu nhập cá nhân phải trả ${taxPerson} triệu`
  );
  return result;
}
tax(fullName, inComeYear, dependentPersons);
// homework  TÍNH TIỀN CÁP
var customerType = "nhà dân";
var customerID = 1234;
var connectionNumber = 2;
var channelNumber = 5;
function charge(customerType, customerID, connectionNumber, channelNumber) {
  switch (customerType) {
    case "Doanh nghiệp":
      if (connectionNumber <= 10) {
        var cableCharge = 75 + 15 + 50 * channelNumber;
      } else {
        var cableCharge =
          75 + 15 + 50 * channelNumber + 5 * (connectionNumber - 10);
      }
      break;
    case "nhà dân":
      {
        connectionNumber = 0;
        var cableCharge = 4.5 + 20.5 + 7.5 * channelNumber;
      }
      break;
    default:
      var cableCharge = "ban nhap sai loai khach hang";
  }
  var result = console.log(
    `Mã khách hàng ${customerID} , hóa đơn ${customerType} là ${cableCharge} $`
  );
  return result;
}
charge(customerType, customerID, connectionNumber, channelNumber);
