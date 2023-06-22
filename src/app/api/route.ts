import { faker } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";
import { DataItem } from "../types";

function generatePerson(): DataItem {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    bio: faker.person.bio(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraphs(3),
  };
}

export async function GET(request: NextRequest) {
  const data: DataItem[] = Array(20)
    .fill(null)
    .map(() => generatePerson());

  return NextResponse.json(data);
}
