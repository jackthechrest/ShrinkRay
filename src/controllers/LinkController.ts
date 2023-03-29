import { Request, Response } from 'express';

async function shortenUrl(req: Request, res: Response): Promise<void> {
  // Make sure the user is logged in
  // send the appropriate response
  // Get the userId from `req.session`
  // Retrieve the user's account data using their ID
  // Check if you got back `null`
  // send the appropriate response
  // Check if the user is neither a "pro" nor an "admin" account
  // check how many links they've already generated
  // if they have generated 5 links
  // send the appropriate response
  // Generate a `linkId`
  // Add the new link to the database (wrap this in try/catch)
  // Respond with status 201 if the insert was successful
}

async function getOriginalUrl(req: Request, res: Response): Promise<void> {
  // Retrieve the link data using the targetLinkId from the path parameter
  // Check if you got back `null`
  // send the appropriate response
  // Call the appropriate function to increment the number of hits and the last accessed date
  // Redirect the client to the original URL
}

export { shortenUrl, getOriginalUrl };
