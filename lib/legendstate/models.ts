import { generateId } from "@/utils/generate-id";
import { sync } from "./sync";
import { supabase } from "@lib/supabase/supabase";
import { observable } from "@legendapp/state";

export const todos$ = observable(
  sync({
    supabase,
    collection: "todos",
    select: (from) =>
      from.select("id,counter,text,done,created_at,updated_at,deleted"),
    actions: ["read", "create", "update", "delete"],
    realtime: false,
    // Persist data and pending changes locally
    persist: {
      name: "todos",
      retrySync: true, // Persist pending changes and retry
    },
    retry: {
      infinite: true, // Retry changes with exponential backoff
    },
  })
);

export function addTodo(text: string) {
  const id = generateId();
  // Add keyed by id to the todos$ observable to trigger a create in Supabase
  todos$[id].assign({
    id,
    text,
  });
}

export function toggleDone(id: string) {
  todos$[id].done.set((prev) => !prev);
}

export function deleteTodo(id: string) {
  todos$[id].delete();
}
