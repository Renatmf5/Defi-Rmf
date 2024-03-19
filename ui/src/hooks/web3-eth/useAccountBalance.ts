import { useCallback, useEffect, useState } from "react";
import { useTargetNetwork } from "./useTargetNetwork";
import { Address } from "viem";
import { useReadContract } from "wagmi";
import { useGlobalState } from '@/services/store/store';
import { Abi } from "abitype";
import abi_test from "@/abi/abi_test.json";

export function useAccountBalance(address?: Address, abi?: Abi, account?: String) {
  const [isEthBalance, setIsEthBalance] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const price = useGlobalState(state => state.nativeCurrencyPrice);
  const { targetNetwork } = useTargetNetwork();

  const {
    data: fetchedBalanceData
  } = useReadContract({
    abi: abi,
    functionName: "balanceOf",
    address: address,
    chainId: targetNetwork.id,
    args: [account],
  });

  // const { data: contractReadData, isSuccess: contractReadSuccess } =
  //     useContractRead({
  //       address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //       abi: wagmigotchiABI,
  //       functionName: "getHunger",
  //     });


  const onToggleBalance = useCallback(() => {
    if (price > 0) {
      setIsEthBalance(!isEthBalance);
    }
  }, [isEthBalance, price]);

  console.log("retorno", fetchedBalanceData);
  console.log(targetNetwork.id, address);
  useEffect(() => {
    if (fetchedBalanceData) {
      setBalance(Number(fetchedBalanceData));
    }
    console.log(fetchedBalanceData);
  }, [fetchedBalanceData, targetNetwork]);

  return { balance, price, onToggleBalance, isEthBalance };
}
