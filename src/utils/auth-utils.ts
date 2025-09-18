export const isValidEmail = (email?: string): string | null => {
  if (!email || email.length < 3) return "Email must be more than 2 characters";
  if (!email.includes("@")) return "Email must contain @";
  if (!email.split("@")[1]?.includes("."))
    return "Email must contain a valid domain";
  return null;
};

export const isValidPassword = (password?: string): string | null => {
  if (!password || password.length < 3) {
    return "Password must be more than 3 characters";
  }

  if (!password.startsWith(password.charAt(0).toUpperCase())) {
    return "Password must start with an uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character";
  }

  return null;
};
