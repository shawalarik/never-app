import type {
    ComponentRenderProxy,
    VNode,
    VNodeChild,
    ComponentPublicInstance,
    FunctionalComponent,
    PropType as VuePropType,
  } from 'vue';


declare global {
    declare type Nullable<T> = T | null;
    declare type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    };
    declare type TimeoutHandle = ReturnType<typeof setTimeout>;
}