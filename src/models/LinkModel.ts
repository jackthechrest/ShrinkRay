import { AppDataSource } from '../dataSource';
import { Link } from '../entities/Link';

const linkRepository = AppDataSource.getRepository(Link);

async function getLinkById(linkId: string): Promise<Link | null> {
  const queriedLink = await linkRepository.findOne({
    select: {
      linkId: true,
      originalUrl: true,
      lastAccessedOn: true,
      numHits: true,
      user: true,
    },
    where: { linkId },
  });
  return queriedLink;
}

function createLinkId (originalUrl: string, userId: string): string {
    const md5 = createHash('md5');
    // concatenate the original url and userId
    md5.update(originalUrl + userId);
    const urlHash = md5.digest('base64url');
    // Get only the first 9 characters of `urlHash`
    const linkId = urlHash.substring(0, 9);

    return linkId;
}

async function createNewLink (originalUrl: string, linkId: string, creator: User): Promise<Link> {
    // TODO: Implement me!
}

async function updateLinkVisits(link: Link): Promise<Link> {
    // Increment the link's number of hits property
    // Create a new date object and assign it to the link's `lastAccessedOn` property.

    // Update the link's numHits and lastAccessedOn in the database
    // return the updated link
}

async function getLinksByUserId(userId: string): Promise<Link[]> {
  const links = await linkRepository
    .createQueryBuilder('link')
    .where({ user: { userId } }) // NOTES: This is how you do nested WHERE clauses
    .leftJoin(/* TODO: specify the relation you want to join with */)
    .select([/*TODO: specify the fields you want */])
    .getMany();

  return links;
}

async function getLinksByUserIdForOwnAccount(userId: string): Promise<Link[]> {
  // TODO: This function is pretty much the same but it should return the fields 

export {};
