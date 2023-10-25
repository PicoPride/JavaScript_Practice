let add = document.querySelector("#add");
let friend = document.querySelector("h2");
let flag = 0;
add.addEventListener("click", function () {
  if (flag == 0) {
    friend.innerHTML = "Friend Request Sent!";
    friend.style.color = "green";
    add.innerHTML = "Remove Friend Request";
    add.style.backgroundColor = "red";
    flag = 1;
  } else {
    friend.innerHTML = "Stranger 🤷‍♂️";
    friend.style.color = "red";
    add.innerHTML = "Send Friend Request Again!";
    add.style.backgroundColor = "cadetblue";
    flag = 0;
  }
});
