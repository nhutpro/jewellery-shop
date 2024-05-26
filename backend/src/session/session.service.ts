import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  @InjectRepository(Session)
  private readonly sessionRepository: Repository<Session>;

  async create(
    newSession: Omit<Session, 'sessionId' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ) {
    return this.sessionRepository.save(newSession);
  }

  async findById(sessionId: string): Promise<Session> {
    return this.sessionRepository.findOneBy({ sessionId: sessionId });
  }

  async updateById(sessionId: Session['sessionId'], payload: Partial<Session>) {
    return this.sessionRepository.update({ sessionId: sessionId }, payload);
  }
}
