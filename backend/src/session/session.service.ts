import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  @InjectRepository(Session)
  private readonly sessionRepository: Repository<Session>;

  async create(
    newSession: Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ) {
    return this.sessionRepository.save(newSession);
  }
}
