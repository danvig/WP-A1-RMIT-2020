// JAVASCRIPT FOR FORM VALIDATION
// Written by: Daniel Viglietti
// Date: August 6th, 2020
// Not all code is original and resources are provided within the file

// The following is original code by Shekhar Kalra and has been modified by Daniel Viglietti

function validateForm() {
    // This is for if the user forgets to calculate it with the button
    membershipCalculation();

    // user inputs
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    emailResult = checkEmail(email);

    // VALIDATION FOR DROPDOWN'S NOT NEEDED DUE TO SELECTION ALREADY BEING CHOSEN

    var age = document.getElementById("rangeValue").value;
    
    // CHECKBOXES
    var yes = document.getElementById("referralyes").checked;
    var no = document.getElementById("referralno").checked;

    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    if (firstname == "") 
    { 
    document.getElementById("firstnameError").innerHTML = "Required: Please enter your first name";
    document.getElementById("firstname").select();
	document.getElementById("firstname").focus();
    return false;
    }

    else if (surname == "") 
    {   
    document.getElementById("lastnameError").innerHTML = "Required: Please enter your last name";
    document.getElementById("lastname").select();
	document.getElementById("lastname").focus();
    return false;
    }

    else if (email == "") 
    {   
    document.getElementById("emailError").innerHTML = "Required: Please enter a valid email address";
    document.getElementById("email").select();
	document.getElementById("email").focus();
    return false;
    }

    if (yes == false && no == false)
    {
        document.getElementById("referralError").innerHTML = "Required: Please confirm a referral status";
        return false;
    }

    if (yes == true && no == true)
    {
        document.getElementById("referralError").innerHTML = "Error: You cannot have both referral boxes checked";
        return false;
    }
}

function checkEmail(inputvalue)
{	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    
    if(pattern.test(inputvalue)) 
    {         
		return true;
    }
    else
    {   
		return false;
    }
    
}

// This is the function that runs when a Family Membership is chosen
function membershipChoice(select) 
{
    var x = document.getElementById("familymembership");
    var y = document.getElementById("rangeDIV");
    if (select.options[select.selectedIndex].text == "Individual")
    {
     x.style.display = "none";
     y.style.display = "block";
    }
    else if (select.options[select.selectedIndex].text == "Family")
    {
        x.style.display = "block";
        y.style.display = "none";
    }
}

// This is the function that runs to reveal multiple age sliders
function ageChange(select)
{
    var age3 = document.getElementById("age3");
    var age4 = document.getElementById("age4");
    var age5 = document.getElementById("age5");

    if (select.options[select.selectedIndex].text == "2")
    {
        age3.style.display = "none";
        age4.style.display = "none";
        age5.style.display = "none";
    }
    else if (select.options[select.selectedIndex].text == "3")
    {
        age3.style.display = "block";
        age4.style.display = "none";
        age5.style.display = "none";
    }
    else if (select.options[select.selectedIndex].text == "4")
    {
        age3.style.display = "block";
        age4.style.display = "block";
        age5.style.display = "none";
    }
    else if (select.options[select.selectedIndex].text == "5")
    {
        age3.style.display = "block";
        age4.style.display = "block";
        age5.style.display = "block";
    }
}

function membershipCalculation()
{ 
    var finalCost = document.getElementById("membershipCost");
    var yes = document.getElementById("referralyes").checked;
    var finalCostCalculation;
    var membershipTypeCost;
    var numFamilyMembersCost;
    var discount;
    var referralDiscount;
    var totalMembershipCost;
    
    // Variables for Age Discounts
    var individualAgeDiscount;
    var familyAgeDiscount;

    // DIVS
    var familyMembershipDIV = document.getElementById("familymembership");
    var individualAgeDIV = document.getElementById("rangeDIV");
    var age3DIV = document.getElementById("age3");
    var age4DIV = document.getElementById("age4");
    var age5DIV = document.getElementById("age5");

    // Age Slider Variables
    // Family Ages
    var age1 = document.getElementById('age1Value');
    var age2 = document.getElementById('age2Value');
    var age3 = document.getElementById('age3Value');
    var age4 = document.getElementById('age4Value');
    var age5 = document.getElementById('age5Value');

    var age1Discount = 0;
    var age2Discount = 0;
    var age3Discount = 0;
    var age4Discount = 0;
    var age5Discount = 0;

    var finalDiscounts;

    // Individual Age
    var individualAge = document.getElementById('rangeValue');

    // 1. DETERMINE MEMBERSHIP COST
    // This determines whether a user is an Individual or Family and applies the relevant cost
    if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        membershipTypeCost = 50.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        membershipTypeCost = 40.0;
    }

    // 2. DETERMINING NUMBER OF FAMILY MEMBERS
    // This reads how many family members are joining and calculates
    // the relevant discounts and costs
    // This will become 0 if the Family DIV is hidden
    var discountCalculation;
    if (numMembers.options[numMembers.selectedIndex].text == "2" && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        numFamilyMembersCost = membershipTypeCost*2;
    }
    else if (numMembers.options[numMembers.selectedIndex].text == "3" && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        discount = 2.5;
        discountCalculation = (membershipTypeCost*3) * discount/100;
        numFamilyMembersCost = (membershipTypeCost*3) - discountCalculation
    }
    else if (numMembers.options[numMembers.selectedIndex].text == "4" && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        discount = 5.0;
        discountCalculation = (membershipTypeCost*4) * discount/100;
        numFamilyMembersCost = (membershipTypeCost*4) - discountCalculation
    }
    else if (numMembers.options[numMembers.selectedIndex].text == "5" && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        discount = 7.5;
        discountCalculation = (membershipTypeCost*5) * discount/100;
        numFamilyMembersCost = (membershipTypeCost*5) - discountCalculation
    }

    // 3. REFERRAL DISCOUNT
    // If a user has been revealed they get a discount
    if (yes == true)
    {
        referralDiscount = 5.0;
    }
    else
    {
        referralDiscount = 0;
    }

    // 4. AGE DISCOUNTS
    // AGE DISCOUNTS
    // Individual
    if (individualAge.innerHTML >= 16 && individualAge.innerHTML <= 19 && membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        individualAgeDiscount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        individualAgeDiscount = 0;
    }
    else
    {
        individualAgeDiscount = 0;
    }

    // Family Discounts Calculator
    if (age1.innerHTML >= 16 && age1.innerHTML <= 19 && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        age1Discount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        age1Discount = 0;
    }
    
    if (age2.innerHTML >= 16 && age2.innerHTML <= 19 && membershipop.options[membershipop.selectedIndex].text == "Family")
    {
        age2Discount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        age2Discount = 0;
    }

    if (age3.innerHTML >= 16 && age3.innerHTML <= 19 && numMembers.options[numMembers.selectedIndex].text == "3")
    {
        age3Discount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        age3Discount = 0;
    }
    else if (age3.innerHTML >= 16 && age3.innerHTML <= 19 && (numMembers.options[numMembers.selectedIndex].text == "4" || numMembers.options[numMembers.selectedIndex].text == "5"))
    {
        age3Discount = 10.0;
    }
    
    if (age4.innerHTML >= 16 && age4.innerHTML <= 19 && numMembers.options[numMembers.selectedIndex].text == "4")
    {
        age4Discount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        age4Discount = 0;
    }
    else if (age4.innerHTML >= 16 && age4.innerHTML <= 19 && (numMembers.options[numMembers.selectedIndex].text == "5"))
    {
        age4Discount = 10.0;
    }
    
    if (age5.innerHTML >= 16 && age5.innerHTML <= 19 && numMembers.options[numMembers.selectedIndex].text == "5")
    {
        age5Discount = 10.0;
    }
    else if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        age5Discount = 0;
    }

    var totalAgeDiscount = (age1Discount + age2Discount + age3Discount + age4Discount + age5Discount);
    
    // 5. VALIDATION
    if (membershipop.options[membershipop.selectedIndex].text == "Individual")
    {
        finalDiscounts = referralDiscount + individualAgeDiscount;
        finalCostCalculation = (membershipTypeCost) * finalDiscounts/100;
        totalMembershipCost = membershipTypeCost - finalCostCalculation;
    }
    else
    // I inteded to make this only run when the dropdown is set to "Family" but this caused
    // issues so I left it as else
    {
        finalDiscounts = referralDiscount + totalAgeDiscount;
        finalCostCalculation = (numFamilyMembersCost) * finalDiscounts/100;
        totalMembershipCost = numFamilyMembersCost - finalCostCalculation;
    }

    // 6. FINAL COST
    if (membershipduration.options[membershipduration.selectedIndex].text == "Ongoing")
    {
        finalCost.innerHTML = ("Total Membership Cost: $" + totalMembershipCost + " per month");
    }
    else if (membershipduration.options[membershipduration.selectedIndex].text == "3 Months")
    {
        finalCost.innerHTML = ("Total Membership Cost: $" + (totalMembershipCost*3) + " for three months ($" + totalMembershipCost + " per month)")
    }
    else if (membershipduration.options[membershipduration.selectedIndex].text == "6 Months")
    {
        finalCost.innerHTML = ("Total Membership Cost: $" + (totalMembershipCost*6) + " for six months ($" + totalMembershipCost + " per month)")
    }
    else if (membershipduration.options[membershipduration.selectedIndex].text == "Yearly")
    {
        finalCost.innerHTML = ("Total Membership Cost: $" + (totalMembershipCost*12) + " for one year ($" + totalMembershipCost + " per month)")
    }
}