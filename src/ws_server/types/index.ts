import { Commands } from '../../constants';

type CommandHandler = (args: number[]) => Promise<void | string>;
export type Controller = Record<Commands, CommandHandler>;
