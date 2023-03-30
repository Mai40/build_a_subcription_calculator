// Your JS code here
let subTypeElement = document.querySelector("#subscription");
let subDurationElement = document.querySelector("#months");
let result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
  //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
  //console.log(subDuration);
});

const updateSubscriptionDiv = function () {
  let monthlyCost = 5; // for basic plan
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  let total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
