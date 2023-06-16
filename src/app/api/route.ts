import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const data = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
  };

  return NextResponse.json(data);
}