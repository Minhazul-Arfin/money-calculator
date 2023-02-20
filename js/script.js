document.getElementById('calculate-btn').addEventListener('click', function(){
    // FETCHING INPUT FIELDS
    const foodField = document.getElementById('food-txt-field');
    const rentField = document.getElementById('rent-txt-field');
    const clothsField = document.getElementById('clothes-txt-field');
    const expenseField = document.getElementById('total-expense');
    const incomeField = document.getElementById('income-txt-field');
    const balanceField = document.getElementById('balance-txt-field');
 
    // STORING THEIR VALUES IN STRING FORMAT
    const foodStringValue = foodField.value;
    const rentStringValue = rentField.value;
    const clothsStringValue = clothsField.value;
    // const expenseStringValue = expenseField.innerText;
    const incomeStringValue = incomeField.value;
    // const balanceStringValue = balanceField.innerText;

    // CONVERTING VALUES INTO FLOAT VALUE
    const foodValue = parseFloat(foodStringValue);
    const rentValue = parseFloat(rentStringValue);
    const clothsValue = parseFloat(clothsStringValue);
    // const expenseValue = parseFloat(expenseStringValue);
    const incomeValue = parseFloat(incomeStringValue);
    // const balanceValue = parseFloat(expenseStringValue);

    // SET VALUE FOR TOTAL EXPENSE
    const totalExpense = foodValue + rentValue + clothsValue;
    expenseField.innerText = totalExpense;

    //SET VALUE FOR BALANCE
    const balance = incomeValue - totalExpense;
    balanceField.innerText = balance;

})

document.getElementById('save-btn').addEventListener('click', function(){
    const totalIncomeField =  document.getElementById('income-txt-field');
    const savePercentageField = document.getElementById('save-input-field');
    const savingAmountResultField = document.getElementById('show-saving-amount');
    const remainingBalanceResultField = document.getElementById('show-remaining-balance');
    const balanceBeforePercentageField = document.getElementById('balance-txt-field');

    const totalIncomeString = totalIncomeField.value;
    const percentageString = savePercentageField.value;
    const balanceBeforePercentageString = balanceBeforePercentageField.innerText;
    // const finalBalanceString = remainingBalanceResultField.innerText;
    

    const totalIncome = parseFloat(totalIncomeString);
    const percentage = parseFloat(percentageString);
    const balanceBeforePercentage = parseFloat(balanceBeforePercentageString);
    // const finalBalanceValue = parseFloat(finalBalanceString);

    const percentageAmount = (percentage/100) * totalIncome;
    const finalBalanceValue = balanceBeforePercentage - percentageAmount;

    savingAmountResultField.innerText = percentageAmount;
    remainingBalanceResultField.innerText = finalBalanceValue;

    
})