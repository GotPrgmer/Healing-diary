package com.ssafy.healingdiary.domain.tag.domain;

import com.ssafy.healingdiary.domain.club.domain.ClubTag;
import com.ssafy.healingdiary.domain.diary.domain.DiaryTag;
import com.ssafy.healingdiary.global.common.domain.BaseEntity;
import com.sun.istack.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="tag")
@AttributeOverride(name = "id", column = @Column(name = "tag_id"))
@AttributeOverride(name = "createdDate", column = @Column(name = "tag_created_date"))
@AttributeOverride(name = "updatedDate", column = @Column(name = "tag_updated_date"))
public class Tag extends BaseEntity {

    @NotNull
    private String content;

    @OneToMany(mappedBy = "tag",cascade = CascadeType.ALL)
    private List<DiaryTag> diaryTag = new ArrayList<>();

    @OneToMany(mappedBy = "tag",cascade = CascadeType.ALL)
    private List<ClubTag> clubTag = new ArrayList<>();
}
