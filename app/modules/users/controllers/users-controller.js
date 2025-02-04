import { Summary } from '../../summaries';

export default {
  async getSummariesByUserHash(ctx) {
    const { state: { user: { hash: userHash } } } = ctx;
    const summaries = await Summary.find({ userHash });

    ctx.body = { data: summaries };
  }
};
