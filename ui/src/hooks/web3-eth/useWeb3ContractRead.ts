import type { ExtractAbiFunctionNames } from "abitype";
import { useReadContract } from "wagmi";
import { useDeployedContractInfo } from "../../hooks/web3-eth";
import { useTargetNetwork } from "./useTargetNetwork";
import {
  AbiFunctionReturnType,
  ContractAbi,
  ContractName,
  UseScaffoldReadConfig,
} from "../../utils/web3-eth/contract";

/**
 * @dev wrapper for wagmi's useContractRead hook which loads in deployed contract contract abi, address automatically
 * @param config - The config settings, including extra wagmi configuration
 * @param config.contractName - deployed contract name
 * @param config.functionName - name of the function to be called
 * @param config.args - args to be passed to the function call
 */
export const useWeb3ContractRead = <
  TContractName extends ContractName,
  TFunctionName extends ExtractAbiFunctionNames<ContractAbi<TContractName>, "pure" | "view">,
>({
  contractName,
  functionName,
  args,
  ...readConfig
}: UseScaffoldReadConfig<TContractName, TFunctionName>) => {
  const { data: deployedContract } = useDeployedContractInfo(contractName);
  const { targetNetwork } = useTargetNetwork();

  return useReadContract({
    chainId: targetNetwork.id,
    functionName,
    address: deployedContract?.address,
    abi: deployedContract?.abi,
    watch: true,
    args,
    enabled: !Array.isArray(args) || !args.some(arg => arg === undefined),
    ...(readConfig as any),
  }) as Omit<ReturnType<typeof useReadContract>, "data" | "refetch"> & {
    data: AbiFunctionReturnType<ContractAbi, TFunctionName> | undefined;
    refetch: (options?: {
      throwOnError: boolean;
      cancelRefetch: boolean;
    }) => Promise<AbiFunctionReturnType<ContractAbi, TFunctionName>>;
  };
};
