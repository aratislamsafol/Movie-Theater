// 📁 src/utils/SweetAlert.js
import Swal from 'sweetalert2';

export const showSuccess = async (
  message = 'Operation successful!',
  title = 'Success'
) => {
  return await Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    timer: 20000,
    showConfirmButton: true,
  });
};

export const showError = (message = 'Something went wrong!', title = 'Error') => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
  });
};

export const showConfirm = async (message = 'Are you sure?', confirmText = 'Yes', cancelText = 'Cancel') => {
  const result = await Swal.fire({
    title: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  });
  return result.isConfirmed;
};

export const showToast = (message = 'Done!') => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: 'success',
    title: message,
  });
};
