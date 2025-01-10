import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  CircularProgress,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";


interface PR {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  state: string;
  created_at: string;
}


const PRlist = () => {
  const { gitusername } = useParams<{ gitusername: string }>();
  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (gitusername) {
      const fetchPRs = async () => {
        setLoading(true);
        setError("");
        try {
          // Fetch PRs from GitHub API (public repos only)
          const response = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${gitusername}+state:open`);
          const data = await response.json();
          setPrs(data.items || []);
        } catch (err) {
          console.error("Error fetching PRs:", err);
          setError("Error fetching pull requests.");
        } finally {
          setLoading(false);
        }
      };

      fetchPRs();
    }
  }, [gitusername]);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
        <h1 className="text-red-400 flex justify-center">{gitusername && `You are viewing ${gitusername}'s Open Pull Requests`}</h1>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        {loading ? (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "left" }}>Title</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Repository</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>State</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prs.length > 0 ? (
                  prs.map((pr) => (
                    <TableRow key={pr.id}>
                      <TableCell sx={{ textAlign: "left" }}>
                        <Link href={pr.html_url} target="_blank" rel="noopener noreferrer">
                          {pr.title}
                        </Link>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {pr.repository_url.replace("https://api.github.com/repos/", "")}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {pr.state}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {formatDate(pr.created_at)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                      No open pull requests found for {gitusername}.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
};

export default PRlist;
