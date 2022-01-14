export const storage = customStorage => {
  const storage = customStorage ?? sessionStorage

  return {
    getItem: storage.getItem,
    setItem: storage.setItem,
  }
}
