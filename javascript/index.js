// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */


  

// Iteration 1 - using callbacks

/*getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    // Bonus 1
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
); */

// Iteration 2 - using promises
// ...
/*obtainInstruction("steak", 0)
.then((step0) => {
  document.querySelector('#steak').innerHTML += `<li>${step0}</li>`
 return obtainInstruction("steak", 1)})
.then((step1) => {
  document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
  return obtainInstruction("steak", 2)})
.then((step2) => {
  document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
  return obtainInstruction("steak", 3)})
.then((step3) => {
  document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
  return obtainInstruction("steak", 4)})
.then((step4) => {
  document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
  return obtainInstruction("steak", 5)})
.then((step5) => {
  document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
  return obtainInstruction("steak", 6)})
.then((step6) => {
  document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
  return obtainInstruction("steak", 7)})
.then((step7) => {
  document.querySelector('#steak').innerHTML += `<li>${step7}</li>`
    const steakImg = document.querySelector('#steakImg')
  steakImg.style.display = "block"
  return obtainInstruction("steak", 8)}) */


// Iteration 3 using async/await  
// ...
/*async function makeBroccoli() {
  for(let i = 0; i<broccoli.length; i++){
    try{
      await obtainInstruction("broccoli", i);
      const broccoli1 = document.querySelector("#broccoli");
      broccoli1.innerHTML += `<li>${broccoli[i]}</li>`;
    } catch(error) {
      console.log(error)
    }
  }
  const broccoliImg = document.querySelector('#broccoliImg');
  broccoliImg.style.display = "block"; 
}
makeBroccoli() */

// Bonus 2 - Promise all
// ...
const dishes = ["mashedPotatoes", "steak", "brusselsSprouts", "broccoli"];
const promises = dishes.map((dish) => obtainInstruction(dish, 0));

Promise.all(promises)
  .then((instructions) => {
    instructions.forEach((instruction, index) => {
      const dishList = document.querySelector(`#${dishes[index]}`);
      dishList.innerHTML = `<li>${instruction}</li>`;
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });



/*const bSproutImg = document.querySelector('#brusselsSproutsImg')
bSproutImg.style.display = "block";*/