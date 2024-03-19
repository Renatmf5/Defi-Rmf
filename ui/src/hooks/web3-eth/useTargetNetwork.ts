import { useEffect } from "react";
import { useAccount } from "wagmi";
import web3Config from "../../../web3.config";
import { useGlobalState } from "../../services/store/store";
import { ChainWithAttributes } from "../../utils/web3-eth";
import { NETWORKS_EXTRA_DATA } from "../../utils/web3-eth";

/**
 * Retrieves the connected wallet's network from scaffold.config or defaults to the 0th network in the list if the wallet is not connected.
 */
export function useTargetNetwork(): { targetNetwork: ChainWithAttributes } {
  const { chain } = useAccount();
  const targetNetwork = useGlobalState(({ targetNetwork }) => targetNetwork);
  const setTargetNetwork = useGlobalState(({ setTargetNetwork }) => setTargetNetwork);

  useEffect(() => {
    const newSelectedNetwork = web3Config.targetNetworks.find(targetNetwork => targetNetwork.id === chain?.id);
    if (newSelectedNetwork && newSelectedNetwork.id !== targetNetwork.id) {
      setTargetNetwork(newSelectedNetwork);
    }
  }, [chain?.id, setTargetNetwork, targetNetwork.id]);

  return {
    targetNetwork: {
      ...targetNetwork,
      ...NETWORKS_EXTRA_DATA[targetNetwork.id],
    },
  };
}
