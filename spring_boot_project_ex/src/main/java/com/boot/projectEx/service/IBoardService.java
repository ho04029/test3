package com.boot.projectEx.service;

import java.util.List;
import java.util.Map;

import com.boot.projectEx.model.BoardVO;

public interface IBoardService {
	int regContent(Map<String, Object> paramMap);
    
    int getContentCnt(Map<String, Object> paramMap);
    
    List<BoardVO> getContentList(Map<String, Object> paramMap);
    
    BoardVO getContentView(Map<String, Object> paramMap);
    

    int getBoardCheck(Map<String, Object> paramMap);
    
    int delBoard(Map<String, Object> paramMap);
}
