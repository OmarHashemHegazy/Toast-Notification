let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error!';
let invalidsMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';


function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes('Error')) {
    toast.classList.add('Error');
  }
  if (msg.includes('Invalid')) {
    toast.classList.add('Invalid');
  }
  
  setTimeout(() => {
    toast.remove()
  }, 6000)
}

