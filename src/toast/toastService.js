export class Ui5ToastService {
  show(message, displayLength, ) {
    return new Promise((resolve, reject) => {
      sap.m.MessageToast.show(message,{
        duration: displayLength,
        onClose: () => {
          resolve();
        }
      });
    });
  }
}
