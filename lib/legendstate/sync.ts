import { generateId } from "@utils/generate-id";
import { observable } from "@legendapp/state";
import {
  configureSyncedSupabase,
  syncedSupabase,
} from "@legendapp/state/sync-plugins/supabase";
import { configureSynced } from "@legendapp/state/sync";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observablePersistAsyncStorage } from "@legendapp/state/persist-plugins/async-storage";
import { supabase } from "@lib/supabase/supabase";

export const sync = configureSynced(syncedSupabase, {
  persist: {
    plugin: observablePersistAsyncStorage({
      AsyncStorage,
    }),
  },
  generateId,
  supabase,
  changesSince: "last-sync",
  fieldCreatedAt: "created_at",
  fieldUpdatedAt: "updated_at",
  fieldDeleted: "deleted",
});
