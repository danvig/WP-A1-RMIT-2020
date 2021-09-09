// JAVASCRIPT FOR HEALTH DIARY
// Written by: Daniel Viglietti
// Date: August 21st, 2020
// Not all code is original and resources are provided within the file

function BMICalculator()
{
    // Code sourced from proglogic.com and modified by Daniel Viglietti
    // https://www.proglogic.com/code/javascript/calculator/bmi.php

    var weight;     // Used for getting Weight in KG
    var height;     // Used for getting Height in CM
    var BMI;        // Used for calculating BMI
    var meaning;    // Determining Underweight, Healthy or Overweight
    var output;     // Output for Form
    var BMIReport;

    // Errors
    weighterror = document.getElementById("weighterror");
    heighterror = document.getElementById("heighterror");

    // Assigning Variables to Objects in HTML Form
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    output = document.getElementById("BMIOutput");
    BMIReport = document.getElementById("BMIReport");

    // VALIDATION
    if (weight == "")
    {
        clearErrors();
        document.getElementById("weight").select();
        document.getElementById("weight").focus();
        weighterror.innerHTML = "Required: Please enter your Weight"
    }
    if (height == "")
    {
        clearErrors();
        document.getElementById("height").select();
        document.getElementById("height").focus();
        heighterror.innerHTML = "Required: Please enter your Height"
    }

    // Calculator
    // 1. Convert CM Height to Meters Squared
    // 2. Divide that by weight
    if (weight > 0 && height > 0)
    {
        clearErrors();
        BMI = weight/(height/100 * height/100);
    }

    // Rounding BMI to 1 Decimal Place
    var roundedBMI;
    roundedBMI = Math.round(BMI*10)/10;

    // Determining Meaning
    if (BMI < 18.5)
    {
        meaning = "Underweight";
    }
    else if (BMI > 18.5 && BMI < 25)
    {
        meaning = "Healthy"
    }
    else if (BMI > 25 && BMI < 30)
    {
        meaning = "Overweight"
    }
    else if (BMI > 30)
    {
        meaning = "Obese"
    }

    // Output BMI and Weight Status
    output.innerHTML = ("Your BMI Indicates that you are: " + meaning);
    BMIReport.innerHTML = ("Your Body Mass Index is: " + roundedBMI);
}

function clearErrors()
{
    var weighterror = document.getElementById("weighterror");
    var heighterror = document.getElementById("heighterror");

    weighterror.innerHTML = "";
    heighterror.innerHTML = "";
}

function saveFoodDiary()
{
    // Variables for Meal Diary
    var mealChoice = document.getElementById("mealChoice").value;
    var consumedMeal = document.getElementById("mealConsumed").value;
    var caloriesConsumed = document.getElementById("caloriesConsumed").value;

    // Error Variables
    var mealError = document.getElementById("mealError");
    var consumedError = document.getElementById("mealconsumedError");
    var caloriesError = document.getElementById("caloriesconsumedError");

    // Validation
    if (mealChoice == "")
    {
        mealError.innerHTML = "Required: Do not leave blank";
        mealChoice.select();
        mealChoice.focus();
        return false;
    }

    if (consumedMeal == "")
    {
        consumedError.innerHTML = "Required: Do not leave blank";
        consumedMeal.focus();
        consumedMeal.select();
        return false;
    }

    if (caloriesConsumed == "")
    {
        caloriesError.innerHTML = "Required: Do not leave blank";
        caloriesConsumed.focus();
        caloriesConsumed.select();
        return false;
    }

    // Saving
    localStorage.setItem('meal', mealError);
    localStorage.setItem('consumed Food', consumedMeal);
    localStorage.setItem('calories consumed', caloriesConsumed);

}

// COUNTDOWN CODE
function countdownStart()
// Sourced from StackOverflow and modified by Daniel Viglietti
// https://stackoverflow.com/questions/14399834/a-simple-countdown-with-for-loop
{
    var countdown = 15;

    var interval = setInterval(function () 
    {
        document.getElementById("15secondcountdown").innerHTML = "&nbsp" + --countdown + " seconds remaining";

        if (countdown == 0)
            clearInterval(interval);

    }, 1000);
}

// This is the function that calculates the heartbeat
function heartbeatCalculation()
{
    // This handles the input, processing, and output of the heartbeat data
    var heartbeat = document.getElementById("heartbeatEntry").value;
    var heartbeatError = document.getElementById("heartbeatEntryError");
    var heartbeatOutput = document.getElementById("heartrateOutput");
    var heartbeatAdvice = document.getElementById("heartrateAdvice");
    
    // This is used to determine the BPMs
    var heartbeatCalculator;

    if (heartbeat == "")
    {
        heartbeatError.innerHTML = "Required: Enter the number of counted beats";
    }
    else
    {
        heartbeatCalculator = heartbeat * 4;
        heartbeatError.innerHTML = "";
        heartbeatOutput.innerHTML = "Your Heart Rate is: " + heartbeatCalculator + " Beats Per Minute";
    }

    // Advice for User
    if (heartbeatCalculator >= 60 && heartbeatCalculator <= 100)
    {
        heartbeatAdvice.innerHTML = "Your Heart Rate is: Normal"; 
    }
    else if (heartbeatCalculator >= 40 && heartbeatCalculator < 60)
    {
        heartbeatAdvice.innerHTML = "Your Heart Rate is: Below Normal";
    }
    else if (heartbeatCalculator >= 0 && heartbeatCalculator < 40)
    {
        heartbeatAdvice.innerHTML = "Your Heart Rate is: Low";
    }
    else if (heartbeatCalculator > 100)
    {
        heartbeatAdvice.innerHTML = "Your Heart Rate is: Above Normal";
    }

    localStorage.setItem('BPM', heartbeatCalculator);
}

// SLEEP CALCULATOR
function sleepCalculator()
{
    var wakeTimeEntry = document.getElementById("wakeTimeEntry").value;
    var sleepTimeEntry = document.getElementById("sleepTimeEntry").value;
    var sleepTimeError = document.getElementById("sleepTimeEntryError");
    var wakeTimeError = document.getElementById("wakeTimeEntryError");
    var totalSleep;
    var sleepOutput = document.getElementById("sleepOutput");
    var sleepAdvice = document.getElementById("sleepAdvice");

    // Validation
    if (sleepTimeEntry == "")
    {
        sleepTimeError.innerHTML = "Required. Enter the time you went to sleep."
    }
    else
    {
        sleepTimeError.innerHTML = ""
    }
    
    if (wakeTimeEntry == "")
    {
        wakeTimeError.innerHTML = "Required. Enter the time you woke up."
    }
    else
    {
        wakeTimeError.innerHTML = ""
    }

    // Calculator
    totalSleep = (sleepTimeEntry - wakeTimeEntry).toFixed(2);
    sleepOutput.innerHTML = "Your Total Sleep time for the night was: " + totalSleep + " hours";

    // Advice
    if (ageBracket.options[ageBracket.selectedIndex].text == "Child")
    {
        if (totalSleep > 11.99)
        {
            sleepAdvice.innerHTML = "You are getting an appropriate amount of sleep at night";
        }
        else if (totalSleep < 11.99)
        {
            sleepAdvice.innerHTML = "You are not getting enough sleep. A child should aim for minimum 11 hours of sleep per night";
        }
    }
    else if (ageBracket.options[ageBracket.selectedIndex].text == "Teenager")
    {
        if (totalSleep > 8.99)
        {
            sleepAdvice.innerHTML = "You are getting an appropriate amount of sleep at night";
        }
        else if (totalSleep < 8.99)
        {
            sleepAdvice.innerHTML = "You are not getting enough sleep. A teenager should aim for minimum 9 hours of sleep per night";
        }
    }
    else if (ageBracket.options[ageBracket.selectedIndex].text == "Adult")
    {
        if (totalSleep > 6.99)
        {
            sleepAdvice.innerHTML = "You are getting an appropriate amount of sleep at night";
        }
        else if (totalSleep < 6.99)
        {
            sleepAdvice.innerHTML = "You are not getting enough sleep. An adult should aim for minimum 7 hours of sleep per night";
        }
    }
    else if (ageBracket.options[ageBracket.selectedIndex].text == "Eldely")
    {
        if (totalSleep > 6.99)
        {
            sleepAdvice.innerHTML = "You are getting an appropriate amount of sleep at night";
        }
        else if (totalSleep < 6.99)
        {
            sleepAdvice.innerHTML = "You are not getting enough sleep. An eldely person should aim for minimum 7 hours of sleep per night";
        }
    }

    localStorage.setItem('BPM', totalSleep);

}

// ACTIVITY TRACKER
function activityTracker()
{   
    var stepTracker = document.getElementById("stepTracker").value;
    var KMTravelled = document.getElementById("KMTravelled").value;
    var flightsClimbed = document.getElementById("flightsClimbed").value;
    var cyclingDistance = document.getElementById("cyclingDistance").value;
    
    var stepData = document.getElementById("stepData");
    var KMData = document.getElementById("KMData");
    var flightsData = document.getElementById("flightsData");
    var cyclingData = document.getElementById("cyclingData");

    var activityError = document.getElementById("activityTrackerError");

    // Validation
    if (stepTracker == "" && KMTravelled == "" && flightsClimbed == "" && cyclingDistance == "")
    {
        activityError.innerHTML = "Error: You have not entered any data";
    }
    else
    {
        activityError.innerHTML = "";
    }

    // Save
    if (stepTracker != "")
    {
        localStorage.setItem("Steps Taken", stepTracker);
        stepData.innerHTML = "Steps Taken: " + stepTracker;
    }
    if (KMTravelled != "")
    {
        localStorage.setItem("KM's Travelled", KMTravelled);
        KMData.innerHTML = "KM's Travelled: " + KMTravelled + " KM";
    }
    if (flightsClimbed != "")
    {
        localStorage.setItem("FlightsClimbed", flightsClimbed);
        flightsData.innerHTML = "flightsClimbed: " + flightsClimbed;
    }
    if (cyclingDistance != "")
    {
        localStorage.setItem("CyclingDistance", cyclingDistance);
        cyclingData.innerHTML = "Cycling Distance: " + cyclingDistance + " KM";
    }
}