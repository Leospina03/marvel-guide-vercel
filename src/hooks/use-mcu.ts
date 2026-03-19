import { useQuery } from "@tanstack/react-query";
import { mcuData, MCUItem } from "../data/mcu";

export function useMCUList() {
  return useQuery({
    queryKey: ["mcu-list"],
    queryFn: async () => mcuData,
  });
}

export function useMCUItem(id: string) {
  return useQuery({
    queryKey: ["mcu-item", id],
    queryFn: async () => {
      const item = mcuData.find(i => i.id === id);
      if (!item) throw new Error("Titolo non trovato");
      return item as MCUItem;
    },
    enabled: !!id,
  });
}
