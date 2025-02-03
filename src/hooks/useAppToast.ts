import { toast, TypeOptions } from "react-toastify";

// import { createFirestoreDoc } from "@/store/services";

interface ToastConfig {
  type: TypeOptions | undefined;
  autoClose: number;
}

// Apenas caso seja necessário no projeto

// const addErrorToDatabase = async (message: string) => {
//   const { error } = await createFirestoreDoc({
//     collectionPath: "errorToasts",
//     data: {
//       message,
//       createdAt: new Date()
//     }
//   });

//   if (error) {
//     console.error("Falha ao adicionar o erro no banco de dados:", error);
//     return;
//   }

//   console.log("Erro registrado no banco de dados:", message);
// };

const errorToast = async (message: string) => {
  const toastConfig: ToastConfig = { type: "error", autoClose: 2000 };

  switch (message) {
    case "RESET_PASSWORD_EXCEED_LIMIT":
      toast.error("Você tentou muitas vezes! Tente mais tarde.", toastConfig);
      break;
    case "EMAIL_NOT_FOUND":
      toast.error("ALOU", toastConfig);
      break;
    case "verify-email":
      toast.error("Você precisa confirmar seu e-mail!", {
        ...toastConfig,
        autoClose: 3000
      });
      break;
    case "auth/credential-already-in-use":
      toast.error("E-mail já cadastrado.", toastConfig);
      break;
    case "auth/wrong-password":
      toast.error("Credenciais incorretas.", toastConfig);
      break;
    case "auth/user-not-found":
      toast.error("Credenciais incorretas.", toastConfig);
      break;
    case "auth/too-many-requests":
      toast.error("Há muitas requisições na plataforma.", toastConfig);
      break;
    case "auth/requires-recent-login":
      toast.error(
        "A exclusão de uma conta requer um login recente do usuário.",
        toastConfig
      );
      break;
    case "auth/email-already-in-use":
      toast.error(
        "Este e-mail já está associado a um estabelecimento. Caso deseje cadastrar outro estabelecimento associado a este e-mail, faça login",
        toastConfig
      );
      break;
    case "auth/missing-email":
      toast.error("Digite o seu e-mail.", toastConfig);
      break;
    case "auth/cancelled-popup-request":
      toast.error("Você fechou o pop-up.", toastConfig);
      break;
    case "auth/user-mismatch":
      toast.error("Não é esse o usuário que está logado.", toastConfig);
      break;
    case "auth/invalid-login-credentials":
      toast.error("Credenciais incorretas.", toastConfig);
      break;
    case "auth/account-exists-with-different-credential":
      toast.error("Conta já existe com diferente credencial.", toastConfig);
      break;
    case "auth/invalid-credential":
      toast.error("Credenciais inválidas.", toastConfig);
      break;
    case "auth/user-disabled":
      toast.error(
        "Usuário está suspenso. Entre em contato com suporte.",
        toastConfig
      );
      break;
    case "recover-user-not-found":
      toast.success("Requisição indisponível", {
        type: "success",
        autoClose: 2000
      });
      break;
    case "non-authenticated-user":
      toast.error("Cadastre-se na plataforma.", toastConfig);
      break;
    case "invalid-report":
      toast.error("Um relatório válido não foi gerado.", toastConfig);
      break;
    case "loading":
      toast.error("Espere o carregamento...", toastConfig);
      break;
    case "same-inputs":
      toast.error(
        "Você acabou de gerar um relatório com esses inputs.",
        toastConfig
      );
      break;
    case "accept-cookies":
      toast.error("Aceite os cookies para fazermos a requisição.", toastConfig);
      break;
    case "enter-before-generate":
      toast.error("Adicione o tema antes de gerar o relatório.", toastConfig);
      break;
    case "already-saved-report":
      toast.error("Relatório já está salvo...", toastConfig);
      break;

    default:
      toast.error(
        "Algum erro aconteceu. Tente novamente mais tarde.",
        toastConfig
      );
      console.log(message);
  }

  // await addErrorToDatabase(message);
};

const genericErrorToast = async (message: string) => {
  const toastConfig: ToastConfig = { type: "error", autoClose: 2000 };
  toast.success(message, toastConfig);

  // await addErrorToDatabase(message);
};

const successToast = (message: string) => {
  const toastConfig: ToastConfig = { type: "success", autoClose: 2000 };
  toast.success(message, toastConfig);
};

export { errorToast, successToast, genericErrorToast };
