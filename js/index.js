const input = document.querySelectorAll('.text'),
      range = document.querySelectorAll('.range'),
      firstInput = input[0],
      firstRange = range[0],
      secondInput = input[1],
      secondRange = range[1],
      thirdInput = input[2],
      thirdRange = range[2];

function changeRange(range, input) {
    range.addEventListener('input', () => {
        input.value = range.value;
    })
}

function changeInput(range, input, min, max) {
    input.addEventListener('change', () => {
        if (input.value < min) {
            input.value = min
        } else if (input.value > max) {
            input.value = max
        }
    
        range.value = input.value;
    })
}

changeRange(firstRange, firstInput);
changeInput(firstRange, firstInput, 1000000, 6000000);
changeRange(secondRange, secondInput);
changeInput(secondRange, secondInput, 1000000, 6000000);
changeRange(thirdRange, thirdInput);
changeInput(thirdRange, thirdInput, 1, 60);




