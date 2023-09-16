This is a [wagmi](https://wagmi.sh) + [RainbowKit](https://rainbowkit.com) + [Vite](https://vitejs.dev/) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:5173](http://localhost:5173) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/App.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Vite](https://vitejs.dev/), [RainbowKit](https://rainbowkit.com) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [RainbowKit Documentation](https://rainbowkit.com/docs/introduction) – learn more about RainbowKit (configuration, theming, advanced usage, etc).
- [Vite Documentation](https://vitejs.dev/) – learn about Vite features and API.

TO USE THIS BOILERPLATE, DO THE FOLLOWING:
GET PROJECT_ID from cloud.wallet.com

1. In the `App.tsx`, CHANGE ADDRESS TO CONTRACT ADDRESS HERE
2. Change the `functionName: "getColor"` to the function you want to interact with from your contract.
3. The `args: [coord.x - 1, coord.y - 1],` means the argument your contract function is expecting.
4. In the `wagmi.ts` file, change the alchemy api key to the key you got from alchemy. NOTE: You only need the part after the https://.../v2/
An example: Say you have this alchemy API key, <https://eth-sepolia.g.alchemy.com/v2/ZD_ZC1-j-ke_Fhw9qfjCdo5CyZa7su8bt8> copy only the `ZD_ZC1-j-ke_Fhw9qfjCdo5CyZa7su8bt8` and paste it as your API key
5. Change the content of `board.json` with the ABI from your deployed contract. Just copy and paste the ABI from your deployed contract and paste it here.

To test the code, use the command: `npm run dev`

Note: You can modify the code to fit what you want. Also try to change the code so it will not look the same for everybody if you have the time.
