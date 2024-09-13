import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = function ({ text }: ErrorMessageProps) {
  return <div className={css.errorMessage}>{text}</div>;
};

export default ErrorMessage;
