
function checkTriangle() {
  document.getElementById('ans').innerHTML = ''

  let angle1 = document.getElementById('angle1').value;
  let angle2 = document.getElementById('angle2').value;
  let angle3 = document.getElementById('angle3').value;

  angle1 = parseInt(angle1);
  angle2 = parseInt(angle2);
  angle3 = parseInt(angle3);

  if(angle1 == "" || angle2 == "" || angle3 == "")
  {
    alert('All the fields are required!');
    return false;
  }
  else if(angle1 < 0 || angle2 < 0 || angle3 < 0)
  {
    alert('Please enter positive numbers.');
    return false;
  }
  else
  {
    let sum = angle1 + angle2 + angle3;
    if(sum == 180)
    {
      console.log(sum);
      document.getElementById('ans').innerHTML = 'Yayy! These angles forms a triangle.'
    }
    else
    {
      document.getElementById('ans').innerHTML = 'No! These angles doesn\'t form a triangle.'
    }
  }
}

// Hypotenuse calculation

function calculate_hypotenuse() {
  let base_a = document.getElementById('base_a').value;
  let height_b = document.getElementById('height_b').value;

  base_a = parseInt(base_a);
  height_b = parseInt(height_b);

  if(base_a == "" || height_b == "")
  {
    alert('Fields are required!');
    return false;
  }
  else
  {
    let ans = Math.sqrt(Math.pow(base_a, 2) + Math.pow(height_b, 2));
    document.getElementById('ans').innerHTML = "Ans : "+ans;
  }
}

// Area calculation

function calculateArea() {

  let base = document.getElementById('base').value;
  let height = document.getElementById('height').value;

  base = parseInt(base);
  height = parseInt(height);

  if(base == "" || height == "" )
  {
    alert('All the fields are required!');
    return false;
  }
  else
  {
    let ans = (base * height)/ 2;
    document.getElementById('area').innerHTML = "Area : "+ans;
  }
}

// Quiz

function checkQuiz() {

  const answerKey = ['90', 'right angled', 'one right angled', '12, 16, 20', 'Equilateral triangle', '100', '30', 'a+b+c', 'no', '45'];

  const names = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  let score = 0;

  answerKey.forEach((element, index) => {
    let isChecked = '';
    let val = 0;
    document.getElementsByName(names[index]).forEach(e => {
      if(e.checked)
      {
        if(e.value == element)
          score++;
      }
    })
  });

  document.getElementById('score').innerHTML = "Score : "+score;
}