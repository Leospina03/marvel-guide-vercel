import { mcuData, MCUItem } from "../data/mcu";

export function useMCUList() {
  return {
    data: mcuData,
    isLoading: false,
    error: null,
  };
}

export function useMCUItem(id: string) {
  const item = mcuData.find((i) => i.id === id);

  return {
    data: item as MCUItem | undefined,
    isLoading: false,
    error: item ? null : new Error("Titolo non trovato"),
  };
}