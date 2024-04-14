export default async function changeWallet() {
  window.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(() => {
      window.ethereum
        .send('wallet_requestPermissions', [{ eth_accounts: {} }])
        .then(() => window.location.reload())
        .catch((error: any) => {
          console.error('Failed to request account access:', error)
        })
    })
    .catch((error: any) => {
      console.error('Failed to request account access:', error)
    })
}
