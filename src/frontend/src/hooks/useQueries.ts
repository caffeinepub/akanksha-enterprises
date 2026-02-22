import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Message } from '../backend';

export function useContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
      timestamp,
    }: {
      name: string;
      email: string;
      message: string;
      timestamp: bigint;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitMessage(name, email, message, timestamp);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}

export function useGetAllMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<Message[]>({
    queryKey: ['messages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMessages();
    },
    enabled: !!actor && !isFetching,
  });
}
